import React from 'react';

function Header() {
  return <h1>Welcome to My Website</h1>;
}

function MainContent() {
  return <p>This is where the main content goes.</p>;
}

function Footer() {
  return <footer>© 2024 My Website</footer>;
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
