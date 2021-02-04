import { FC, ReactElement } from 'react';
import 'taro-ui/dist/style/index.scss';

import './style/index.scss';

interface IProps { }

const App: FC<IProps> = ({ children }) => {
  return children as ReactElement
}

export default App
