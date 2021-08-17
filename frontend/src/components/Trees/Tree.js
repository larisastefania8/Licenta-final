import React from 'react';
import { deleteTreesAction } from '../../redux/actions/trees/treeActions';
import { useDispatch } from 'react-redux';

const Tree= () => {
    const dispatch = useDispatch();
    return (
      <div>
        <div class='card mb-3' style={{ maxWidth: '540px' }}>
          <div class='row no-gutters'>
            <div class='col-md-4'>
              <img src='...' class='card-img' alt='...' />
            </div>
            <div class='col-md-8'>
              <div class='card-body'>
                <h5 class='card-title'>Tree</h5>
                <p class='card-text'>Tree detail</p>
                <p class='card-text'>
                  <small class='text-muted'>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Tree;
