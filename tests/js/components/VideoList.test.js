import React from 'react';
import  {VideoList}  from '../../../src/js/components/VideoList';


import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
Enzyme.configure({ adapter: new Adapter() });

import renderer from 'react-test-renderer';
//this package is provided by jest(replacing react-test)
describe('Testing VideoList....', ()=>{
	let videoList = [{id:{videoId: 1}},{id: {videoId:2}}];
	const selectVideo = jest.fn();
	let wrapper = shallow(
		<VideoList
			selectVideo = {selectVideo}
			videoList = {videoList}
			isLoading= {false}
			error =	{null}	
		/>)
	expect(wrapper).toMatchSnapshot();
	

it('renders the loading message',()=>{
	let wrapper = shallow(
		<VideoList
			selectVideo={selectVideo}
			videoList={videoList}
			isLoading={false}
			error={{message: 'Error while loading Videos'}}
			/>)
	expect(wrapper).toMatchSnapshot();
	});

});

	// it('it runs the getVideos function with correct args', ()=>{
	// 	wrapper.find('input').simulate('change',{target:{value:'java'}})
	// 	expect(getVideos.mock.calls[0][0]).toEqual('java');
	// expect(wrapper).toMatchSnapshot();
	
	// });
