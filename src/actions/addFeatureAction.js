
export const ADD_FEATURE = "ADD_FEATURE";

export const addFeatureAction = data => {
  console.log("My Action")
    return {
        type: "ADD_FEATURE", payload: data
      }
}