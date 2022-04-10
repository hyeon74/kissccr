export const state = () => ({ 
    val: 'sample' 
});

export const mutations = { 
    increment(state, msg) { state.val += msg; } 
};

