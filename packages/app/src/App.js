import { Button } from '@zzcan/ui';
import './index.less';

export default function App() {
  return (
    <div>
      <Button
        type="primary"
        size="large"
        onClick={() => console.log(11111111)}
        className="button"
      >
        点击
      </Button>
    </div>
  );
}
