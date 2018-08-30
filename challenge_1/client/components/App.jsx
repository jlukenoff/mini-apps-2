import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './App.css';
import Search from './Search/Search';
import Results from './Results/Results';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      results: [],
      pageCount: 0,
      currentSearch: '',
    };
    this.submitSearch = this.submitSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  submitSearch() {
    const { inputVal } = this.state;
    fetch(`/events?q=${inputVal}&_page=0&_limit=10`)
      .then((response) => {
        const pageCount = Math.ceil(response.headers.get('x-total-count') / 10);
        this.setState({ pageCount, currentPage: 1 });
        return response.json();
      })
      .then((results) => {
        this.setState({
          results,
          currentSearch: inputVal,
        });
        console.log('results: ', results);
      })
      .catch(err => console.error(`Error fetching data: ${err}`));
  }

  handleInputChange(e) {
    this.setState({ inputVal: e.target.value });
  }

  handlePageClick(e) {
    console.log('e:', e);
    const { currentSearch } = this.state;
    fetch(`/events?q=${currentSearch}&_page=${e.selected}&_limit=10`)
      .then(res => res.json())
      .then((results) => {
        this.setState({ results });
      });
  }

  render() {
    const {
      submitSearch,
      handleInputChange,
      handlePageClick,
      state,
    } = this;
    const { pageCount } = state;
    return (
      <div className={styles.container}>
        <Search
          submitSearch={submitSearch}
          handleInputChange={handleInputChange}
        />
        <Results {...state} />
        <ReactPaginate
          previousLabel="Prev"
          nextLabel="Next"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={styles.pagination}
          subContainerClassName="pages pagination"
          activeClassName={styles.currentPage}
        />
      </div>
    );
  }
}

export default App;
