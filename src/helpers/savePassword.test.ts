import { Password } from "../types";
import { getLSData } from "./getLSData";
import { savePassword } from "./savePassword";

const testPassword: Password = {
  title: "test pw",
  password: "veilig_wachtwoord1",
};

var localStorageMock = (function () {
  var store: any = {};
  return {
    getItem: function (key: string) {
      return store[key];
    },
    setItem: function (key: string, value: any) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
    removeItem: function (key: string) {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("savePassword", () => {
  afterEach(() => {
    window.localStorage.clear();
  });

  test("save password", () => {
    savePassword(testPassword);

    const result = getLSData();

    if (!result) {
      throw new Error();
    }

    expect(result[0]).toEqual(
      expect.objectContaining({
        password: testPassword.password,
        title: testPassword.title,
      })
    );
  });

  test("trow error if local storage matches", () => {
    window.alert = jest.fn();

    savePassword(testPassword);
    savePassword(testPassword);

    let result = getLSData();
    result = getLSData();

    expect(result?.length).toBe(1);
  });
});
