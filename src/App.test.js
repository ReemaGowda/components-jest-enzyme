import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


//counter function to test 

describe(" counter testing", () => {
  test('render title of render', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find("h1").text()).toContain("This is counter app")
    console.log(wrapper.debug());
  });
  // const { getByText } = render(<App />);
  // const linkElement = getByText("This is counter app");
  // expect(linkElement).toBeInTheDocument();


  //second test

  test("render a button with text of increment", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('#increment-btn').text()).toBe("Increment")
    console.log(wrapper.debug())
  })


})


//adding shallow - shallow is the fucntion of 
//enzyme which is actullay create instance of component.
//shallow render the outer part of component



