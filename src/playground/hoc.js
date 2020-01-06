import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    console.log(props)
    return (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
    )
    
    };

const withInfo = (WrappedComponent) => {
    return  (props) => (
        <div>
            {props.isAdmin && <p>This is private</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}
// const AdminInfo = withInfo(Info)

const withAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <div>
                    <p>Youre logged in</p> 
                    <WrappedComponent {...props} />
                </div>
            ) : <p>Please log in</p>
            }

        </div>
    )
}

const AdminInfo = withAuth(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="new hoc" />, document.getElementById('app'));
ReactDOM.render(<AdminInfo isAuthenticated={true} info="new hoc" />, document.getElementById('app'));