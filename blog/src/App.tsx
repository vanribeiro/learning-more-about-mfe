import Button from 'provider/button';

const App = () => {
  return (
    <div className="content">
      <h1>Consumer</h1>
      <Button />
      <a href="https://www.pexels.com">Photos provided by Pexels</a>

{/* <!-- or show our white logo --> */}

<a href="https://www.pexels.com">
<img src="https://images.pexels.com/lib/api/pexels-white.png" />
</a>

{/* <!-- or show our black logo --> */}

<a href="https://www.pexels.com">
<img src="https://images.pexels.com/lib/api/pexels.png" />
</a>

    </div>
  );
};

export default App;
