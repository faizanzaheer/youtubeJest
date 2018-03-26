import React from 'react';
import Search from '../../../src/js/components/Search';


import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
Enzyme.configure({ adapter: new Adapter() });

// import renderer from 'react-test-renderer';
//this package is provided by jest(replacing react-test)
describe('Testing Seacrh Component', ()=>{
	const getVideos = jest.fn(); //mock function //ALways empty
	const wrapper = shallow(<Search getVideos={getVideos}/>);

	it('renders the Search Component', ()=>{
	expect(wrapper).toMatchSnapshot();
	
	});


	it('it runs the getVideos function with correct args', ()=>{
		wrapper.find('input').simulate('change',{target:{value:'java'}})
		expect(getVideos.mock.calls[0][0]).toEqual('java');
	// expect(wrapper).toMatchSnapshot();
	
	});
});