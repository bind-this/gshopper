'use strict';

import React from 'react';
import { connect } from 'react-redux';

const EditReviewButton = (props) => {
    return (
      <button
        type="submit"
        className="mini ui button"
        style={{ margin: '0 0 0.5em 0' }}
        onClick={ () => props.handleClick(props.review.id) }
      >
        Edit
      </button>
    );
}

const mapStateToProps = state => ({ product: state.product })

export default connect(mapStateToProps)(EditReviewButton);
