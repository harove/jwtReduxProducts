import Enzyme, { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { LoginForm } from "./LoginForm";
import { Provider } from "react-redux";
import store from '../../store'

Enzyme.configure({ adapter: new Adapter() });

describe("test LoginForm.jsx", () => {
  it("confirms rendering of LoginForm", () => {
    const wrapper = mount(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
    expect(wrapper.find(LoginForm)).toBeDefined

  });
});
