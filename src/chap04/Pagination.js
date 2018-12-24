import React from 'react';  

function Pagination(props) {  
    return (
    <div> 
      <hr/>
      <div className="container m-5">
        <h4>Chapters</h4> 
        <div>
          <nav aria-label="Chapter Links">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="/" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <hr/>
      <div className="container m-5">
        <h4>Disable Previous Button</h4> 
        <div>
          <nav aria-label="Chapter Links">
            <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link" href="/" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="container m-5">
        <h4>Active Page Button</h4> 
        <div>
          <nav aria-label="Chapter Links">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="/" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="/">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="container m-5">
        <h4>Pagination large button size</h4> 
        <div>
          <nav aria-label="Chapter Links">
            <ul className="pagination pagination-lg">
              <li className="page-item disabled">
                <a className="page-link" href="/" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>


      <div className="container m-5">
        <h4>Center Justify</h4> 
        <div>
          <nav aria-label="Chapter Links">
            <ul className="pagination pagination-sm justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="/" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="container m-5">
        <h4>End Justify</h4> 
        <div>
          <nav aria-label="Chapter Links">
            <ul className="pagination pagination-sm justify-content-end">
              <li className="page-item disabled">
                <a className="page-link" href="/" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>


    </div>  

    );
   
}

export default Pagination;