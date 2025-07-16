'use client'

import React, { useState } from 'react'
import { Button, Modal, Input } from 'antd'
import { ArrowLeftOutlined, PlusOutlined, ChevronRightOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'

const SavedPage = () => {
  const router = useRouter()
  const [collections, setCollections] = useState([
    { id: 1, name: 'Weekend Plan', itemCount: 5, color: '#E0E0E0' },
    { id: 2, name: 'Goa', itemCount: 8, color: '#E0E0E0' },
    { id: 3, name: 'Summer Trip', itemCount: 6, color: '#E0E0E0' }
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newCollectionName, setNewCollectionName] = useState('')

  const handleCreateCollection = () => {
    if (newCollectionName.trim()) {
      const newCollection = {
        id: Date.now(),
        name: newCollectionName,
        itemCount: 0,
        color: '#E0E0E0'
      }
      setCollections([...collections, newCollection])
      setIsModalOpen(false)
      setNewCollectionName('')
    }
  }

  const handleCollectionClick = (collection) => {
    router.push(`/collection/${collection.id}`)
  }

  return (
    <div style={{ backgroundColor: '#FDF2E9', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Header */}
      <div className="d-flex align-items-center p-3" style={{ paddingTop: '50px' }}>
        <Button
          icon={<ArrowLeftOutlined />}
          type="text"
          onClick={() => router.back()}
          style={{ marginRight: '15px', fontSize: '18px' }}
        />
        <h4 style={{ margin: 0, fontWeight: 'bold' }}>Saved</h4>
      </div>

      {/* Collections Section */}
      <div className="px-3">
        <h6 style={{ fontWeight: 'bold', marginBottom: '15px', fontSize: '16px' }}>
          Collections
        </h6>

        {/* Create New Collection */}
        <div
          className="d-flex align-items-center p-3 mb-3"
          style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            cursor: 'pointer'
          }}
          onClick={() => setIsModalOpen(true)}
        >
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              backgroundColor: '#F5F5F5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px'
            }}
          >
            <PlusOutlined style={{ fontSize: '20px', color: '#999' }} />
          </div>
          <div style={{ flex: 1 }}>
            <h6 style={{ margin: 0, fontWeight: 'bold', fontSize: '16px' }}>
              Create New
            </h6>
          </div>
        </div>

        {/* Existing Collections */}
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="d-flex align-items-center p-3 mb-3"
            style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              cursor: 'pointer'
            }}
            onClick={() => handleCollectionClick(collection)}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                backgroundColor: collection.color,
                marginRight: '15px'
              }}
            />
            <div style={{ flex: 1 }}>
              <h6 style={{ margin: 0, fontWeight: 'bold', fontSize: '16px' }}>
                {collection.name}
              </h6>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                {collection.itemCount} items
              </p>
            </div>
            {/* <ChevronRightOutlined style={{ color: '#999', fontSize: '16px' }} /> */}
          </div>
        ))}
      </div>

      {/* Create Collection Modal */}
      <Modal
        title="Create New Collection"
        open={isModalOpen}
        onOk={handleCreateCollection}
        onCancel={() => setIsModalOpen(false)}
        okText="Create"
        okButtonProps={{
          style: {
            backgroundColor: '#FF5722',
            borderColor: '#FF5722',
            borderRadius: '20px'
          }
        }}
        cancelButtonProps={{
          style: { borderRadius: '20px' }
        }}
      >
        <div className="mb-3">
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
            Collection Name
          </label>
          <Input
            placeholder="Enter collection name"
            value={newCollectionName}
            onChange={(e) => setNewCollectionName(e.target.value)}
            style={{ borderRadius: '8px' }}
          />
        </div>
      </Modal>
    </div>
  )
}

export default SavedPage