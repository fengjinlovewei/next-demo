function Layout({ children, modal }: never) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}

export default Layout;
