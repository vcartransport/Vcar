import { NextResponse } from 'next';

export async function GET() {
  try {
    const sitemapUrl = 'https://v-car.company/sitemap.xml';
    
    // Ping Google
    const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
    await fetch(googlePingUrl, { method: 'GET' });

    // Ping IndexNow
    const indexNowKey = '51eeef07c7be4f779765e63be35b879f';
    const indexNowUrl = `https://api.indexnow.org/indexnow?url=${encodeURIComponent(sitemapUrl)}&key=${indexNowKey}`;
    await fetch(indexNowUrl, { method: 'GET' });

    // Ping Bing
    const bingPingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
    await fetch(bingPingUrl, { method: 'GET' });

    return NextResponse.json({ success: true, message: 'Sitemaps pinged successfully' });
  } catch (error) {
    console.error('Error pinging sitemaps:', error);
    return NextResponse.json({ success: false, error: 'Failed to ping sitemaps' }, { status: 500 });
  }
}
