import React from 'react'

function SearchBox() {
    return (
        <React.Fragment>
            <div className="top-search collapse show" id="collapseExample" aria-expanded="true">
                <div className="card card-block">
                    <div className="newsletter-widget text-center">
                        <form className="form-inline">
                            <input type="text" className="form-control" placeholder="What you are looking for?"></input>
                            <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SearchBox
