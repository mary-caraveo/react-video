import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';

const Player = ({ match, playing, getVideoSource, history }) => {
  const { id } = match.params;
  const hasPlaying = Object.keys(playing).length > 0;

  useEffect(() => {
    getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <Redirect to='/404/' />, 1000
  );
};

const mapSateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapSateToProps, mapDispatchToProps)(Player);
