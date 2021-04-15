import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = {
	state: {
		// foo: "foo",
	},
	modules: {
		a: {
			namespaced: true,
			state: {
				foo: "foo",
			},
			getters: {
				getFoo(state) {
					return state.foo;
				},
			},
			mutations: {
				changeFoo(state, newFoo) {
					state.foo = newFoo;
				},
			},
		},
	},
};

export default new Vuex.Store(store);
