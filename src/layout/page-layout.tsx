const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page-layout">
      <header className="page-header">
        <h1>Bank of Rapperswil</h1>
      </header>
      <main>{children}</main>
      <footer className="page-footer">
        <p>© 2077 Bank of Rapperswil. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PageLayout;
