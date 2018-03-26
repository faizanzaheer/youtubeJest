import React from 'react';
import  {VideoListEntry}  from '../../../src/js/components/VideoListEntry';


import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
Enzyme.configure({ adapter: new Adapter() });

import renderer from 'react-test-renderer';
//this package is provided by jest(replacing react-test)
describe('Testing VideoListEntry....', ()=>{
	const video = {
		snippet: {
			thumbnails:{
				default:{
					url: 'youtube.com'
				}
			},title: 'video snippet title',
			description: 'video snippet description'

			}
		}
		const handleSelectedVideo = jest.fn();
		const wrapper = shallow(<VideoListEntry
			video = {video}
			handleSelectedVideo={handleSelectedVideo}/>);
		it('renders the VideoListEntry companent',()=>{
			expect(wrapper).toMatchSnapshot();
		});
		it('testing selective function', ()=>{
			expect(handleSelectedVideo.mock.calls.length).toBe(0);
		});
		it('handleSelectedVideo call..',()=>{
			wrapper.find('.media-heading').simulate('click')
			expect(handleSelectedVideo.mock.calls[0][0]).toEqual(video)
		});
	});
