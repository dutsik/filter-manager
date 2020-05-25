import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { connect } from 'react-redux';
import { findById } from '../../utils/dataAccess';


const InsizeForm = ({
}) => {
    return (
        <div className="custom-container">
            AAAAAA
        </div>
    )
}

const mapStateToProps = state => {
    return { 
    };
  };
  
const mapDispatchToProps = dispatch => ({

  });
  
export default connect(mapStateToProps, mapDispatchToProps)(InsizeForm);