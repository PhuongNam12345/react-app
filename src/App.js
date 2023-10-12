import './App.css';

function App() {
return(
<div className="App">
    <div>
        <header className="App-header">
            <ul>
                <li><a class="active" href="#home">Home</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    </div>
    <div className='content'>

        <div className='content_left'>

            <div className='form'>


                <div className='text_content'>
                    <p>Let's get you started</p>
                </div>
                <div className='form-group'>
                    <label>Full name</label>
                    <input type='text'placeholder='Ade Tiger'></input>
                </div>
                <div  className='form-group'>
                    <label>Email address</label>
                    <input type='email'placeholder='youname@gmail.com'></input>
                </div>
                <div  className='form-group'>
                    <label>Phone number</label>
                    <input type="number"></input>
                </div>
                <div  className='form-group'>
                    <label>Create Password</label>
                    <input type='password'></input>
                </div>
                <div  className='form-group'>
                    <label>Location</label>
                    <input></input>
                </div>
                <div>
                <input type="submit" value="Submit"></input>
                </div>
            </div>
        </div>
        <div className='content_right'>
            <p className='text_main'>“Creativity is intelligence having fun”</p>
            <p className='text_sub'>Albert Einstein</p>
        </div>
    </div>
</div>
);
}

export default App;
