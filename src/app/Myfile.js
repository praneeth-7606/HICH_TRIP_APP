// import React from 'react';
// import { Container, Row, Col, Button as RBButton, Card as RBCard } from 'react-bootstrap';
// import { Button as AntButton, Input, DatePicker, Table } from 'antd';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'antd/dist/antd.min.css';

// const dataSource = [
//   {
//     key: '1',
//     name: 'Praneeth',
//     role: 'Full Stack Developer',
//   },
//   {
//     key: '2',
//     name: 'John',
//     role: 'Frontend Developer',
//   },
// ];

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//   },
//   {
//     title: 'Role',
//     dataIndex: 'role',
//     key: 'role',
//   },
// ];

// function Myfile() {
//   return (
//     <Container className="mt-5">
//       {/* React Bootstrap Card */}
//       <RBCard className="mb-4">
//         <RBCard.Body>
//           <RBCard.Title>React Bootstrap Card</RBCard.Title>
//           <RBCard.Text>This card is built using React-Bootstrap.</RBCard.Text>
//           <RBButton variant="primary">Bootstrap Button</RBButton>
//         </RBCard.Body>
//       </RBCard>

//       {/* Bootstrap Grid */}
//       <Row className="mb-4">
//         <Col>
//           <div className="p-3 border bg-light">Bootstrap Grid - Column 1</div>
//         </Col>
//         <Col>
//           <div className="p-3 border bg-light">Bootstrap Grid - Column 2</div>
//         </Col>
//       </Row>

//       {/* Ant Design Section */}
//       <div className="mb-4">
//         <h4>Ant Design Form</h4>
//         <Input placeholder="Enter your name" className="mb-2" />
//         <DatePicker className="mb-2 d-block" />
//         <AntButton type="primary">Submit</AntButton>
//       </div>

//       {/* Ant Design Table */}
//       <div>
//         <h4>User Table (Ant Design)</h4>
//         <Table dataSource={dataSource} columns={columns} pagination={false} />
//       </div>
//     </Container>
//   );
// }

// export default Myfile;
