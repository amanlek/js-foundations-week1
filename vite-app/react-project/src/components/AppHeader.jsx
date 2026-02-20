import { Layout, Menu, Typography } from 'antd';

const {Header} = Layout;
const {Title} = Typography;

function AppHeader() {
  return (
    
    <Header style={{display: "flex", alignItems: "center", backgroundColor: "lightblue",}}>
      <Title style={{ color: "white", marginRight: "40px",}}>My Task List</Title> 
      <nav>
        <a href="#">Home</a> | <a href="#">About</a>
      </nav>
    </Header>
  );
}

export default AppHeader;

// style={{ color: "white", fontSize: "18px", marginRight: "40px" }}>