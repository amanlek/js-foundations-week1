import { Layout, Menu } from 'antd';

const {Header} = Layout;

function AppHeader() {
  return (
    
    <Header style={{display: "flex", alignItems: "center"}}>
      <h1 style={{ color: "white", fontSize: "18px", marginRight: "40px" }}>My React App</h1>
      <nav>
        <a  href="#">Home</a> | <a href="#">About</a>
      </nav>
    </Header>
  );
}

export default AppHeader;