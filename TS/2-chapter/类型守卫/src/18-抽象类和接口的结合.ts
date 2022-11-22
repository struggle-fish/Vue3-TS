interface MouseListenerProcess {
  mouseReleased(e: any): void
  mousePressed(e: any):void
  mouseEntered(e: any): void

  mouseClicked(e: any): void
  mouseExited(e: any): void

}


abstract class MouseListenerProcessAdapter implements MouseListenerProcess {
  mousePressed(e: any): void {
    throw new Error('Method not implemented.')
  }
  mouseEntered(e: any): void {
    throw new Error('Method not implemented.')
  }
  mouseExited(e: any): void {
    throw new Error('Method not implemented.')
  }

  mouseReleased(e: any): void {
    throw new Error('Method not implemented.')
  }
  
  abstract mouseClicked(e: any): void
}


class MyMouseListenerProcess extends MouseListenerProcessAdapter {
  mouseClicked(e: any): void {
    throw new Error('Method not implemented.')
  }
  
}







