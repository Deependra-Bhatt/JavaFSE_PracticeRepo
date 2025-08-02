import React from 'react';
import { shallow, mount } from 'enzyme';
import CohortDetails from './CohortDetails';
import { CohortData } from './Cohort';

describe("Cohort Details Component", () => {

  // Test 1: Component creation
  test("should create the component", () => {
    const wrapper = shallow(<CohortDetails cohort={CohortData[0]} />);
    expect(wrapper.exists()).toBe(true);
  });

  // Test 2: Props initialization
  test("should initialize the props", () => {
    const wrapper = mount(<CohortDetails cohort={CohortData[1]} />);
    expect(wrapper.props().cohort).toEqual(CohortData[1]);
  });

  // Test 3: Display cohort code in h3
  test("should display cohort code in h3", () => {
    const wrapper = mount(<CohortDetails cohort={CohortData[2]} />);
    const h3 = wrapper.find('h3');
    expect(h3.text()).toContain(CohortData[2].cohortCode);
  });

  // Test 4: Snapshot testing
  test("should always render same html", () => {
    const wrapper = shallow(<CohortDetails cohort={CohortData[0]} />);
    expect(wrapper).toMatchSnapshot();
  });

});
