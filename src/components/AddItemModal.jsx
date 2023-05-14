import React from 'react'
import {
  Modal,
  Button,
  TextInput,
  Label,
  Checkbox,
  Select,
} from 'flowbite-react'

export default function AddItemModal() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <React.Fragment>
      <Button onClick={() => setIsOpen(true)}>
        Add Item
      </Button>
      <Modal
        className='font-fig'
        show={isOpen}
        size='lg'
        popup={true}
        onClose={() => setIsOpen(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className='space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
            <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
              Add Item to Inventory
            </h3>
            <div>
              <div className='block'>
                <Label
                  htmlFor='itemName'
                  value='Item Name'
                />
              </div>
              <TextInput
                id='itemName'
                placeholder='Item Name'
                required={true}
              />
            </div>
            <div>
              <div className='block'>
                <Label
                  htmlFor='serialNumber'
                  value='Serial Number'
                />
              </div>
              <TextInput
                id='serialNumber'
                placeholder='Serial Number'
                required={true}
              />
            </div>
            <div>
              <div className='block'>
                <Label
                  htmlFor='description'
                  value='Item Description'
                />
              </div>
              <TextInput
                id='description'
                placeholder='Item Description'
                required={true}
              />
            </div>
            <div id='select'>
              <div className=' block'>
                <Label
                  htmlFor='category'
                  value='Select item category'
                />
              </div>
              <Select id='category' required={true}>
                <option value=''>Laptop</option>
                <option value=''>Computer</option>
                <option value=''>Peripheral</option>
              </Select>
            </div>
            <div className='flex justify-between'>
              <div className='flex items-center gap-2'>
                <Checkbox id='remember' />
                <Label htmlFor='remember'>
                  Item is Working?
                </Label>
              </div>
            </div>
            <div className='w-full'>
              <Button>Add Item</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}
