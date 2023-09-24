import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import Provider from '../providers/Provider'


const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Provider, ...options })

export * from '@testing-library/react'
export { customRender as render }
