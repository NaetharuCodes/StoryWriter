const Header = () => {
  return <div>Header</div>;
};

const Footer = () => {
  return <div>Footer</div>;
};

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  return (
    <div id="app-shell-container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppShell;
