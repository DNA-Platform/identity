import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Katya's Weekly Progress Report - English Translation v1 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Katya's Progress Report</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            background-color: #f5f5f7;
            color: #333;
            line-height: 1.4;
        }
        
        .header {
            background: white;
            padding: 12px 20px;
            border-bottom: 1px solid #e5e5e7;
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #ff6b35;
        }
        
        .menu-btn {
            background: #333;
            color: white;
            padding: 8px 16px;
            border: none;
            border-radius: 20px;
            font-size: 14px;
        }
        
        .search-box {
            flex: 1;
            max-width: 400px;
            padding: 8px 16px;
            border: 1px solid #ddd;
            border-radius: 20px;
            font-size: 14px;
        }
        
        .nav-right {
            display: flex;
            gap: 20px;
            font-size: 12px;
            color: #666;
            text-transform: uppercase;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .course-card {
            background: white;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 20px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            position: relative;
        }
        
        .course-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-size: cover;
            background-position: center;
            flex-shrink: 0;
        }
        
        .course-info {
            flex: 1;
        }
        
        .course-title {
            font-size: 16px;
            font-weight: 600;
            color: #1d1d1f;
            margin-bottom: 4px;
        }
        
        .stats {
            display: flex;
            gap: 60px;
            margin-top: 8px;
        }
        
        .stat-group {
            display: flex;
            flex-direction: column;
        }
        
        .stat-label {
            font-size: 12px;
            color: #86868b;
            margin-bottom: 2px;
        }
        
        .stat-value {
            font-size: 14px;
            font-weight: 600;
        }
        
        .stat-value.red {
            color: #ff3b30;
        }
        
        .status-badge {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 500;
            white-space: nowrap;
        }
        
        .status-good {
            background: #d1f2eb;
            color: #00875a;
        }
        
        .status-excellent {
            background: #e3f2fd;
            color: #1976d2;
        }
        
        .status-low {
            background: #fff3cd;
            color: #856404;
        }
        
        .bookmark {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 20px;
            height: 20px;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23999" stroke-width="2"><path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16l5-4 5 4z"/></svg>') no-repeat center;
            background-size: contain;
            opacity: 0.4;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">FOXFORD</div>
        <button class="menu-btn">☰ Menu</button>
        <input type="text" class="search-box" placeholder="Search Foxford...">
        <div class="nav-right">
            <div>SCHEDULE</div>
            <div>TIMETABLE</div>
        </div>
    </div>
    
    <div class="container">
        <div class="course-card">
            <div class="course-avatar" style="background-image: url('data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 100 100\\"><circle cx=\\"50\\" cy=\\"50\\" r=\\"50\\" fill=\\"%234a90e2\\"/><text x=\\"50\\" y=\\"60\\" text-anchor=\\"middle\\" fill=\\"white\\" font-size=\\"40\\" font-family=\\"Arial\\">RU</text></svg>')"></div>
            <div class="course-info">
                <div class="course-title">Russian Language Course for Grade 4 (Homeschool)</div>
                <div class="stats">
                    <div class="stat-group">
                        <div class="stat-label">Attendance</div>
                        <div class="stat-value">3 of 4</div>
                    </div>
                    <div class="stat-group">
                        <div class="stat-label">Problem Solving</div>
                        <div class="stat-value red">12 of 27</div>
                    </div>
                </div>
            </div>
            <div class="status-badge status-good">Few tasks completed</div>
            <div class="bookmark"></div>
        </div>

        <div class="course-card">
            <div class="course-avatar" style="background-image: url('data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 100 100\\"><circle cx=\\"50\\" cy=\\"50\\" r=\\"50\\" fill=\\"%23e74c3c\\"/><text x=\\"50\\" y=\\"60\\" text-anchor=\\"middle\\" fill=\\"white\\" font-size=\\"32\\" font-family=\\"Arial\\">LIT</text></svg>')"></div>
            <div class="course-info">
                <div class="course-title">Literature Course for Grade 4 (Homeschool)</div>
                <div class="stats">
                    <div class="stat-group">
                        <div class="stat-label">Attendance</div>
                        <div class="stat-value">3 of 4</div>
                    </div>
                    <div class="stat-group">
                        <div class="stat-label">Problem Solving</div>
                        <div class="stat-value">24 of 36</div>
                    </div>
                </div>
            </div>
            <div class="status-badge status-excellent">Keep it up! 👍</div>
            <div class="bookmark"></div>
        </div>

        <div class="course-card">
            <div class="course-avatar" style="background-image: url('data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 100 100\\"><circle cx=\\"50\\" cy=\\"50\\" r=\\"50\\" fill=\\"%2395a5a6\\"/><text x=\\"50\\" y=\\"60\\" text-anchor=\\"middle\\" fill=\\"white\\" font-size=\\"28\\" font-family=\\"Arial\\">MATH</text></svg>')"></div>
            <div class="course-info">
                <div class="course-title">School Mathematics for Grade 4. Basic Course (Homeschool)</div>
                <div class="stats">
                    <div class="stat-group">
                        <div class="stat-label">Attendance</div>
                        <div class="stat-value">3 of 4</div>
                    </div>
                    <div class="stat-group">
                        <div class="stat-label">Problem Solving</div>
                        <div class="stat-value red">9 of 28</div>
                    </div>
                </div>
            </div>
            <div class="status-badge status-good">Few tasks completed</div>
            <div class="bookmark"></div>
        </div>

        <div class="course-card">
            <div class="course-avatar" style="background-image: url('data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 100 100\\"><circle cx=\\"50\\" cy=\\"50\\" r=\\"50\\" fill=\\"%23f39c12\\"/><text x=\\"50\\" y=\\"60\\" text-anchor=\\"middle\\" fill=\\"white\\" font-size=\\"28\\" font-family=\\"Arial\\">SCI</text></svg>')"></div>
            <div class="course-info">
                <div class="course-title">Environmental Science Course for Grade 4 (Homeschool)</div>
                <div class="stats">
                    <div class="stat-group">
                        <div class="stat-label">Attendance</div>
                        <div class="stat-value red">1 of 2</div>
                    </div>
                    <div class="stat-group">
                        <div class="stat-label">Problem Solving</div>
                        <div class="stat-value">12 of 22</div>
                    </div>
                </div>
            </div>
            <div class="status-badge status-low">Low attendance</div>
            <div class="bookmark"></div>
        </div>

        <div class="course-card">
            <div class="course-avatar" style="background-image: url('data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 100 100\\"><circle cx=\\"50\\" cy=\\"50\\" r=\\"50\\" fill=\\"%239b59b6\\"/><text x=\\"50\\" y=\\"60\\" text-anchor=\\"middle\\" fill=\\"white\\" font-size=\\"28\\" font-family=\\"Arial\\">ENG</text></svg>')"></div>
            <div class="course-info">
                <div class="course-title">English Language Course for Grade 4 (Homeschool)</div>
                <div class="stats">
                    <div class="stat-group">
                        <div class="stat-label">Attendance</div>
                        <div class="stat-value red">0 of 2</div>
                    </div>
                    <div class="stat-group">
                        <div class="stat-label">Problem Solving</div>
                        <div class="stat-value red">0 of 14</div>
                    </div>
                </div>
            </div>
            <div class="status-badge status-low">Low attendance</div>
            <div class="bookmark"></div>
        </div>

        <div class="course-card">
            <div class="course-avatar" style="background-image: url('data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 100 100\\"><circle cx=\\"50\\" cy=\\"50\\" r=\\"50\\" fill=\\"%23e67e22\\"/><text x=\\"50\\" y=\\"60\\" text-anchor=\\"middle\\" fill=\\"white\\" font-size=\\"28\\" font-family=\\"Arial\\">ART</text></svg>')"></div>
            <div class="course-info">
                <div class="course-title">Visual Arts in School. Grade 4 (Homeschool)</div>
                <div class="stats">
                    <div class="stat-group">
                        <div class="stat-label">Attendance</div>
                        <div class="stat-value red">0 of 1</div>
                    </div>
                    <div class="stat-group">
                        <div class="stat-label">Problem Solving</div>
                        <div class="stat-value red">0 of 1</div>
                    </div>
                </div>
            </div>
            <div class="status-badge status-low">Low attendance</div>
            <div class="bookmark"></div>
        </div>
    </div>
</body>
</html>`}
        </CodeBox>
    </Chapter>
);
