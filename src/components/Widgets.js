import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('PAPA React is back', 'Top news - 9099 readers')}
      {newsArticle('Coronavirus: USA Updates', 'Top news - 886 readers')}
      {newsArticle('Tesla hits new highs', 'Cars & auto - 300 readers')}
      {newsArticle('Bitcoin Breaks $22K', 'Crypto - 8000 readers')}
      {newsArticle('Is Redux too good?', 'Code - 125 readers')}
      {newsArticle('PAPA React launches course?!', 'Top News - 6593 readers')}
    </div>
  );
}

export default Widgets;
