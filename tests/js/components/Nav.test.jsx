import React from 'react';
import { Nav } from '../../../src/js/components/Nav';


import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
Enzyme.configure({ adapter: new Adapter() });

// import renderer from 'react-test-renderer';
//this package is provided by jest(replacing react-test)
describe('Testing Nav Component', ()=>{
	const getVideos = jest.fn(); //mock function //ALways empty
	const wrapper = shallow(<Nav getVideos={getVideos}/>);
	it('renders the Nav Component', ()=>{
	// const getVideos = jest.fn(); //mock function //ALways empty
	// const wrapper = shallow(<Nav getVideos={getVideos}/>);//this is an enzyme functionality shallow rendering the App
	// const tree = wrapper.toJSON();//now we are using jest functionality to take the snapshot
	expect(wrapper).toMatchSnapshot();
	expect(getVideos.mock.calls.length).toBe(0);
	});
	it('it passes on the getVideos Function', ()=>{
	// const getVideos = jest.fn(); //mock function //ALways empty
	// const wrapper = shallow(<Nav getVideos={getVideos}/>);//this is an enzyme functionality shallow rendering the App
	// const tree = wrapper.toJSON();//now we are using jest functionality to take the snapshot
	expect(getVideos.mock.calls.length).toBe(0);
	});
});
