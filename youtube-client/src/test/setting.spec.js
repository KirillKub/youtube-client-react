import React from 'react'
import { shallow } from 'enzyme'

import Setting from '../../src/searchSetting/setting';


describe('Setting', () => {
  it('if isSetting = false, return null', () => {
    const props = {
      isSetting: false,
      sortByDate: () => {},
      sortByCount: () => {},
      sortByInput: () => {},
    }
    const container = shallow(<Setting  {...props}/>);
    expect(container).toMatchSnapshot();
    expect(container.find('div')).toHaveLength(0)  
  })
  it('if isSetting = true, render component', () => {
    const props = {
      isSetting: true,
      sortByDate: () => {},
      sortByCount: () => {},
      sortByInput: () => {},
    }
    const container = shallow(<Setting  {...props}/>);
    expect(container).toMatchSnapshot();
    expect(container.find('div')).toHaveLength(3)
    expect(container.find('span')).toHaveLength(3)  
  })
})