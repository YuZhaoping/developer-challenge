
import kaleidoAgent from './kaleido/agent';
import mockEthereum from './mock-agent';


const init = async ({ config }) => {
  let ethereumAgent = kaleidoAgent;

  try {
      await ethereumAgent.init({ self: ethereumAgent, config });
  } catch (err) {
    // TODO
    console.log(err);

    if (ethereumAgent !== mockEthereum) {
      console.log('Use the mock Ethereum agent instead.');

      ethereumAgent = mockEthereum;

      await ethereumAgent.init({ self: ethereumAgent, config });

    } else {
      throw err;
    }
  }

  return ethereumAgent;
};


const loader = {
  init
};


export default loader;
