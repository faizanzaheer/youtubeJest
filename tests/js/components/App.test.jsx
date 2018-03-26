import React from 'react';
import { App } from '../../../src/js/components/App';


import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
Enzyme.configure({ adapter: new Adapter() });

// import renderer from 'react-test-renderer';
//this package is provided by jest(replacing react-test)
describe("App Component",()=>{
	it('renders the App Component', ()=>{
	const getVideos = jest.fn(); //mock function //ALways empty
	const wrapper = shallow(<App getVideos={getVideos}/>);//this is an enzyme functionality shallow rendering the App
	// const tree = wrapper.toJSON();//now we are using jest functionality to take the snapshot
	// jest is not doing shallow that is why we are using enzymes
	expect(wrapper).toMatchSnapshot();

	// expect(getVideos.mock.calls[0][0]).toEqual('javascript')
	// expect(getVideos.mock.calls[0][1]).toEqual(true)

	expect(getVideos.mock.calls[0]).toEqual(['javascript', true])


});})
