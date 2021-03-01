import React, { FC, ReactElement } from 'react';
import { RecoilRoot } from 'recoil'
import 'taro-ui/dist/style/index.scss';

import './app.global.scss';

interface IProps { }

const App: FC<IProps> = ({ children }) => {
  return (
    <RecoilRoot>
      {children as ReactElement}
    </RecoilRoot>
  )
}

export default App
