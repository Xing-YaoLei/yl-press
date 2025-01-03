# Ubuntu 24.04安装Nginx

### **1. 更新系统包**

在开始安装之前，确保系统软件包是最新的：

```bash
sudo apt update
sudo apt upgrade -y
```

------

### **2. 安装 Nginx**

#### 安装

```bash
sudo apt install nginx -y
```

#### 启动和配置

```bash
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl status nginx
```

#### 检查安装

在浏览器访问 `http://<你的服务器IP>`，应看到 Nginx 的默认欢迎页面。

------

### **3. 配置Nginx**

`/etc/nginx/sites-available/` 是 Nginx 的一个目录，通常用来存放各个站点（虚拟主机）的配置文件。

#### 1. 目录作用

- **`/etc/nginx/sites-available/`**
  - 存放所有站点配置文件，每个站点一个配置文件。
  - 这些配置文件不会直接被 Nginx 加载。
  - 它是一个集中管理站点配置的地方，方便对站点启用或停用。
- **`/etc/nginx/sites-enabled/`**
  - 存放被启用的站点的配置文件，通常是从 `sites-available` 中的配置文件创建的符号链接。
  - Nginx 启动时会加载 `sites-enabled` 中的配置文件。

-----

#### 2. 默认文件

- 在 **Ubuntu** 上，`/etc/nginx/sites-available/` 目录通常包含一个默认配置文件，名为 `default`。

- 这个文件配置了 Nginx 的默认站点（即没有配置其他域名或 IP 时的响应行为）。

```nginx
# 默认内容示例
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    root /var/www/html;
    index index.html index.htm index.nginx-debian.html;

    server_name _;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

-----

#### 3. 新增站点

- 如果要配置一个新的站点，应在 `sites-available` 中创建一个新的文件。例如，配置 `press.oh-undefined.com`

  ```bash
  sudo nano /etc/nginx/sites-available/press.oh-undefined.com.com
  ```

- 文件内容示例：

  ```nginx
  server {
      listen 80;
      server_name press.oh-undefined.com.com;
  
      root /xxx/xxx/dist;
      index index.html;
    
      location / {
          try_files $uri $uri/ =404;
      }
  }
  ```

- 启用刚才我们创建的站点`press.oh-undefined.com`

  ```bash
  sudo ln -s /etc/nginx/sites-available/press.oh-undefined.com /etc/nginx/sites-enabled/
  ```

- 测试配置并且重载Nginx

  ```bash
  sudo nginx -t
  sudo systemctl reload nginx
  ```

### **4. 为什么使用 `sites-available` 和 `sites-enabled`？**

- **集中管理**：
  - `sites-available` 用来存储所有站点配置，避免因直接编辑主配置文件导致混乱。
- **便捷控制**：
  - 使用符号链接（`ln -s`）在 `sites-enabled` 中启用站点，删除链接即可停用站点，而不需要完全删除配置文件。
- **安全性**：
  - 未被启用的站点配置不会被加载，避免误操作影响运行中的服务。

