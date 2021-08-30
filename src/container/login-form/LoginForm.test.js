import Enzyme, { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { LoginForm } from "./LoginForm";
import { Provider } from "react-redux";
import store from '../../store'

Enzyme.configure({ adapter: new Adapter() });

describe("test LoginForm", () => {

    let wrapper;
    beforeEach(()=>{
        wrapper = mount(
            <Provider store={store}>
              <LoginForm />
            </Provider>
          );
    })

    afterAll(()=>{
        wrapper.unmount();
    })

  test("renders LoginForm", () => {
    expect(wrapper).toBeDefined();
  });

  test("renders email and must be an input", () => {
    const email = wrapper.find('.email').get(0)
    expect(email).toHaveProperty('type','input')
  });

  test("renders email and must be an input", () => {
    const email = wrapper.find('.email').get(0).props.name
    console.log(email)
    expect(email).toMatch('email')
  });

});
