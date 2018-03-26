import React from 'react';
import { VideoPlayer } from '../../../src/js/components/VideoPlayer';


import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

// import renderer from 'react-test-renderer';
//this package is provided by jest(replacing react-test)
describe('Testing VideoPlayer Component', ()=>{
	const video = {
		id: {
			videoId: 1234 
		},
		snippet: 
		{
			title: 'some title',
			description: 'some description'
		}
	}
	// const getVideos = jest.fn(); //mock function //ALways empty
	const wrapper = shallow(<VideoPlayer selectedVideo={video} />);

	it('renders the VideoPlayer Component', ()=>{
	expect(wrapper).toMatchSnapshot();
	
	});
	it('it renders given an empty video object', ()=>{
		let video = {};
		let wrapper = shallow(<VideoPlayer selectedVideo = {video}/>)
		expect(wrapper).toMatchSnapshot();
	})


	// it('it runs the getVideos function with correct args', ()=>{
	// 	wrapper.find('input').simulate('change',{target:{value:'java'}})
	// 	expect(getVideos.mock.calls[0][0]).toEqual('java');
	// expect(wrapper).toMatchSnapshot();
	
	// });
});