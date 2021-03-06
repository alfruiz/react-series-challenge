import React from 'react';
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme';

import ConnectedFavorites from "./../index";

import Footer from "./../../../component/footer";
import Giphys from "./../../../component/giphys";
import Header from "./../../../component/header";


describe('<Home connect component> ', () => {

  const mockStore = configureStore();
  let store, wraper;

  beforeEach(function () {
    // moxios.install();
    store = mockStore({
      fetch: {
        loading: false,
        word: '',
        data: {},
      },
      local: {
        likes: [],
        ids: [],
      }
    });
  });

  describe('Checkin childs', () => {
    beforeEach(() => {
      wraper = shallow(
        <ConnectedFavorites match={{ path: '/' }} store={store} />
      ).dive();
    })
    it('<Header> ', () => {
      expect(wraper.find(Header).length).toEqual(1);
    });

    it('<Giphys> ', () => {
      expect(wraper.find(Giphys).length).toEqual(1);
    });

    it('<Footer> ', () => {
      expect(wraper.find(Footer).length).toEqual(1);
    });

    it('if it\'s NOT at home', () => {
      expect(wraper.instance().home).toBeFalsy();
    });

  });
});
