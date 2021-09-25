import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { getVideoSearch } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const { isHome, getVideoSearch } = props;
  const inputStyle = classNames('input', {
    isHome,
  });

  const handleInput = (event) => {
    getVideoSearch(event.target.value);
  };

  return (
    <section className="main">
      <h2 className="main_title">¿Qué quieres ver hoy?</h2>
      <input
        className={inputStyle}
        type="text"
        placeholder="Buscar..."
        onChange={handleInput}
      />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    searchResult: state.searchResult,
  };
};

const mapDispatchToProps = {
  getVideoSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
