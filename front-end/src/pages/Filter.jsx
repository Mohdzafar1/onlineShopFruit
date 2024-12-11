import { useState } from 'react'
import { FaFilter, FaTimes } from 'react-icons/fa'
import { products } from './ProductList'

const Filter = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const handleCate=()=>{
    
  }

  return (
    <div>
      {/* Desktop Filter */}
      <div className="hidden md:block w-64 bg-white">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <button className="px-4 py-1.5 bg-red-500 text-white text-sm rounded">
              Filter
            </button>
            <button className="text-gray-600 text-sm hover:text-gray-900">
              Clear All
            </button>
          </div>
        </div>

        <div className="p-4 space-y-6">
          {/* Categories */}
          <div className="border-b pb-4">
            <h3 className="font-medium mb-2">Categories</h3>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-red-500 rounded border-gray-300" />
              <span className="text-sm text-gray-600">Fruits</span>
            </label>
          </div>

          {/* Subcategories */}
          <div className="border-b pb-4">
            <h3 className="font-medium mb-2">Subcategories</h3>
            <div className="space-y-2">
              {[
                'Apples & Pears',
                'Citrus Fruits',
                'Cut Fruits',
                'Grapes',
                'Mangoes',
                'Melons',
                'Popular Fruits',
                'Stone Fruits'
              ].map((item) => (
                <label key={item} className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-red-500 rounded border-gray-300" value={item} onChange={handleCate}/>
                  <span className="text-sm text-gray-600">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Brand */}
          <div className="border-b pb-4">
            <h3 className="font-medium mb-2">Brand</h3>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-red-500 rounded border-gray-300" />
              <span className="text-sm text-gray-600">Frugivore</span>
            </label>
          </div>

          {/* Price */}
          <div className="border-b pb-4">
            <h3 className="font-medium mb-2">Price</h3>
            <div className="space-y-2">
              {[
                'Less than Rs.50',
                'Rs.51 to Rs.100',
                'Rs.101 to Rs.200',
                'Rs.201 to Rs.500',
                'Rs.501 to Rs.999',
                'Rs.1000 & Above'
              ].map((range) => (
                <label key={range} className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-red-500 rounded border-gray-300" />
                  <span className="text-sm text-gray-600">{range}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Discount */}
          <div className="border-b pb-4">
            <h3 className="font-medium mb-2">Discount</h3>
            <div className="space-y-2">
              {[
                'Less than 10%',
                '10% - 20%',
                '20% - 50%',
                'More than 50%'
              ].map((discount) => (
                <label key={discount} className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-red-500 rounded border-gray-300" />
                  <span className="text-sm text-gray-600">{discount}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="border-b pb-4">
            <h3 className="font-medium mb-2">Availability</h3>
            <div className="space-y-2">
              {['In Stock', 'Out of Stock'].map((status) => (
                <label key={status} className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-red-500 rounded border-gray-300" />
                  <span className="text-sm text-gray-600">{status}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Food Type */}
          <div className="pb-4">
            <h3 className="font-medium mb-2">Food Type</h3>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-red-500 rounded border-gray-300" />
              <span className="text-sm text-gray-600">Fresh</span>
            </label>
          </div>
        </div>
      </div>

      {/* Mobile Filter Button */}
      <div className="md:hidden">
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => setIsMobileOpen(true)}
            className="bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <FaFilter className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Filter Modal */}
        {isMobileOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="fixed inset-y-0 right-0 max-w-full flex">
              <div className="w-full sm:w-96 bg-white">
                <div className="h-full flex flex-col">
                  <div className="p-4 border-b flex justify-between items-center">
                    <h2 className="text-lg font-medium">Filters</h2>
                    <button
                      onClick={() => setIsMobileOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <FaTimes className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto">
                    {/* Copy the desktop filter content here */}
                    <div className="p-4 space-y-6">
                      {/* Categories */}
                      <div className="border-b pb-4">
                        <h3 className="font-medium mb-2">Categories</h3>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="form-checkbox h-4 w-4 text-red-500 rounded border-gray-300" />
                          <span className="text-sm text-gray-600">Fruits</span>
                        </label>
                      </div>

                      {/* Subcategories */}
                      <div className="border-b pb-4">
                        <h3 className="font-medium mb-2">Subcategories</h3>
                        <div className="space-y-2">
                          {[
                            'Apples & Pears',
                            'Citrus Fruits',
                            'Cut Fruits',
                            'Grapes',
                            'Mangoes',
                            'Melons',
                            'Popular Fruits',
                            'Stone Fruits'
                          ].map((item) => (
                            <label key={item} className="flex items-center space-x-2">
                              <input type="checkbox" className="form-checkbox h-4 w-4 text-red-500 rounded border-gray-300" />
                              <span className="text-sm text-gray-600">{item}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Brand */}
                      <div className="border-b pb-4">
                        <h3 className="font-medium mb-2">Brand</h3>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="form-checkbox h-4 w-4 text-red-500 rounded border-gray-300" />
                          <span className="text-sm text-gray-600">Frugivore</span>
                        </label>
                      </div>

                      {/* Price */}
                      <div className="border-b pb-4">
                        <h3 className="font-medium mb-2">Price</h3>
                        <div className="space-y-2">
                          {[
                            'Less than Rs.50',
                            'Rs.51 to Rs.100',
                            'Rs.101 to Rs.200',
                            'Rs.201 to Rs.500',
                            'Rs.501 to Rs.999',
                            'Rs.1000 & Above'
                          ].map((range) => (
                            <label key={range} className="flex items-center space-x-2">
                              <input type="checkbox" className="form-checkbox h-4 w-4 text-red-500 rounded border-gray-300" />
                              <span className="text-sm text-gray-600">{range}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Discount */}
                      <div className="border-b pb-4">
                        <h3 className="font-medium mb-2">Discount</h3>
                        <div className="space-y-2">
                          {[
                            'Less than 10%',
                            '10% - 20%',
                            '20% - 50%',
                            'More than 50%'
                          ].map((discount) => (
                            <label key={discount} className="flex items-center space-x-2">
                              <input type="checkbox" className="form-checkbox h-4 w-4 text-red-500 rounded border-gray-300" />
                              <span className="text-sm text-gray-600">{discount}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Availability */}
                      <div className="border-b pb-4">
                        <h3 className="font-medium mb-2">Availability</h3>
                        <div className="space-y-2">
                          {['In Stock', 'Out of Stock'].map((status) => (
                            <label key={status} className="flex items-center space-x-2">
                              <input type="checkbox" className="form-checkbox h-4 w-4 text-red-500 rounded border-gray-300" />
                              <span className="text-sm text-gray-600">{status}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Food Type */}
                      <div className="pb-4">
                        <h3 className="font-medium mb-2">Food Type</h3>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="form-checkbox h-4 w-4 text-red-500 rounded border-gray-300" />
                          <span className="text-sm text-gray-600">Fresh</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t">
                    <div className="flex gap-4">
                      <button
                        onClick={() => setIsMobileOpen(false)}
                        className="flex-1 px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200"
                      >
                        Clear All
                      </button>
                      <button
                        onClick={() => setIsMobileOpen(false)}
                        className="flex-1 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Filter

