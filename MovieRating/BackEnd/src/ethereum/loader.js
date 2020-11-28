
import mockEthereum from './mock-agent';


const init = async ({ config }) => {
  let ethereumAgent = mockEthereum;

  await ethereumAgent.init({ self: ethereumAgent, config });

  return ethereumAgent;
};


const loader = {
  init
};


export default loader;
