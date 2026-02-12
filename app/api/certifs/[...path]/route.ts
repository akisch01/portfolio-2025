import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join, resolve } from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path: pathArray } = await params
    const filePath = decodeURIComponent(pathArray.join('/'))
    const certifsDir = resolve(process.cwd(), 'certifs')
    const fullPath = resolve(certifsDir, filePath)
    
    // Security: prevent directory traversal - ensure the resolved path is within certifs directory
    if (!fullPath.startsWith(certifsDir)) {
      return new NextResponse('Forbidden', { status: 403 })
    }

    const fileBuffer = await readFile(fullPath)
    const contentType = filePath.endsWith('.pdf') 
      ? 'application/pdf' 
      : filePath.endsWith('.png')
      ? 'image/png'
      : filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')
      ? 'image/jpeg'
      : 'application/octet-stream'

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `inline; filename="${filePath.split('/').pop()}"`,
      },
    })
  } catch (error) {
    console.error('Error serving file:', error)
    return new NextResponse('File not found', { status: 404 })
  }
}

