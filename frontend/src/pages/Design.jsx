import ResizePanel from "react-resize-panel";

const Design = () => {

  return (
    <div className='containerd'>
        <div className='body'>

        <ResizePanel direction="e" style={{ flexGrow: '1' }} >
            <div className='sidebar withMargin panel'>left panel<br /> with margin <br />default 50% of content area using flex-grow</div>
        </ResizePanel>
        <div className='content panel'>content</div>
        <ResizePanel direction="w" style={{ width: '400px' }} handleClass='customHandle' borderClass='customResizeBorder'>
            <div className='sidebar panel'>right panel<br /> with custom handle<br /> default 400px</div>
        </ResizePanel>

        </div>

        <ResizePanel direction="n" style={{height: '200px'}}>
        <div className='footer panel'>
            <div className='footerArea'>
            <div className='footerAreaContent'>
                <span>footer area, min height: 100px</span>
            </div>
            </div>
        </div>
        </ResizePanel>
    </div>
  )
}

export default Design