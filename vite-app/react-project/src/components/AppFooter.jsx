import { Layout } from 'antd';

const {Footer} = Layout;

function AppFooter() {
  return (
    <Footer style={footerStyle}>
      <p style={{ textAlign: "center" }}>This is Footer -- 2026 My React App</p>
    </Footer>
  );
}


const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#161616',
};

export default AppFooter;