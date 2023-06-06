<template>
    <layout>
        <template #content>
                <div class="container">
      <div class="breadcrumbs">
        パンくずリスト > <a href="">パンくずリスト</a>
      </div>
    </div>
      
    <main>

     <section>
      <div class="section_header">
          <h2 class="section_title">
              <div class="past_data">
                <svg id="sumi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.03 29.03"><defs></defs><g id="sumi_icon"><g><circle class="cls-2sumi" cx="14.51" cy="14.51" r="14.51"/><path class="cls-1sumi" d="m10.91,16.05c-.36,1.92-.94,3.54-1.74,4.87l-1.57-.77c.66-1.16,1.23-2.7,1.7-4.61l1.61.51Zm-.09-2.28l-1.16,1.35c-.36-.43-1.04-1.14-2.05-2.15l1.08-1.26c1.11.99,1.82,1.67,2.13,2.05Zm2.9,4.85c-.24.95-.69,1.81-1.35,2.56l-1.46-.88c.51-.65.85-1.31,1.01-1.98s.25-1.35.25-2.06v-1.24l-.87.16-.46-1.46c1.35-.18,2.5-.47,3.44-.85-.78-.54-1.44-1.18-2-1.93h-1.05v-.25l-1.15,1.29c-.41-.52-1.12-1.24-2.13-2.17l1.12-1.22c1.08.94,1.79,1.64,2.15,2.09v-1.16h3.71v-1.08h1.89v1.08h3.9v1.42h-1.2c-.53.7-1.16,1.31-1.87,1.85,1.01.33,2.22.59,3.64.78l-.59,1.56c-.35-.04-.71-.1-1.08-.16v5.96h-1.89v-2.31h-4.01Zm.27-2.23c0,.26-.01.53-.04.83h3.77v-.83h-3.73Zm0-1.77v.44h3.73v-.56c-.62-.19-1.2-.41-1.75-.66-.62.32-1.29.58-1.98.78Zm1.9-2.56c.54-.34,1.01-.71,1.42-1.12h-2.93c.44.42.94.8,1.51,1.12Z"/></g></g></svg>
              </div>
              <div class="decision_data">
                <svg id="decision" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.03 29.03"><defs></defs><g id="decision_icon"><g><circle class="cls-2decision" cx="14.51" cy="14.51" r="14.51"/><path class="cls-1decision" d="m11.44,15.92c-.16.71-.46,1.56-.9,2.55-.44.99-.87,1.82-1.3,2.47l-1.68-.92c.46-.64.9-1.45,1.33-2.42s.71-1.71.86-2.21l1.69.53Zm-.38-2.32l-1.05,1.44c-.67-.65-1.47-1.33-2.41-2.04l.99-1.36c1.04.74,1.87,1.4,2.47,1.96Zm.62-3.07l-1.08,1.44c-.72-.67-1.54-1.38-2.46-2.11l1.06-1.32c1.18.88,2,1.54,2.48,1.99Zm4.08,6.56c-.96,1.86-2.49,3.18-4.59,3.96l-.85-1.39c1.18-.53,2.1-1.15,2.74-1.85.64-.7,1.05-1.32,1.23-1.86h-2.8v-1.54h3.11v-2.43h-2.7v-1.48h2.7v-1.55h1.89v1.55h3.43v3.92h.98v1.54h-3.83c.89,1.51,2.2,2.69,3.92,3.54l-1.16,1.44c-.79-.4-1.56-.95-2.3-1.65s-1.33-1.43-1.77-2.2Zm.73-5.11v2.43h1.63v-2.43h-1.63Z"/></g></g></svg>
              </div>
              <div class="undefined_data active">
                <svg id="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.03 29.03"><defs></defs><g id="circle_icon"><g><path class="cls-1circle" d="m14.51,28.03C7.06,28.03,1,21.97,1,14.52S7.06,1,14.51,1s13.51,6.06,13.51,13.51-6.06,13.51-13.51,13.51Z"/><path class="cls-2circle" d="m14.51,2c6.9,0,12.52,5.61,12.52,12.52s-5.61,12.52-12.52,12.52S2,21.42,2,14.52,7.61,2,14.51,2m0-2C6.5,0,0,6.5,0,14.52s6.5,14.52,14.51,14.52,14.52-6.5,14.52-14.52S22.53,0,14.51,0h0Z"/></g></g></svg>
              </div>

            2022年9月6日（火）
          </h2>
      </div>
        <div class="container">

          <div class="container_box">

            <div class="order_items">


              <div class="flex_wrap">

                <div class="order_item_box">

                  <div class="order_item_box_container">

                    <div class="order_item_box_inner">
                      <div class="grid_box">
                        <div class="order_item_image">
                          <div>
                            <img src="images/item01.jpg" alt="商品画像">
                            <div class="item_num">0</div>
                          </div>
                        </div>
                        <div class="order_item_info">
                          <p class="item_product">日替り弁当Ａ</p>
                          <p class="item_price">400円(税込)</p>
                          <p class="item_text">
                            メイン（肉・魚）１種、副菜４種、香の物１種のボリュームたっぷりの日替りメニューのお弁当です。
                          </p>
                        </div>
                        <div class="order_item_num">
                          <div>
                            <div class="order_item_delete">-</div><div class="order_item_addition">+</div>
                          </div>
                        </div>
                      </div>
                      <div class="order_item_variation">

                        <div class="variation_box">
                          <p class="variation_headline">ご飯の量：</p>
                          <div class="select02">
                            <select>
                              <option>普通盛り</option>
                              <option>大盛り　＋80円</option>
                            </select>
                          </div>
                        </div>
                        
                        <div class="variation_box">
                          <p class="variation_headline">ご飯の種類：</p>
                          <div class="select02">
                            <select>
                              <option>白ご飯</option>
                              <option>味ご飯に変更　＋100円</option>
                            </select>
                          </div>
                        </div>
                        
                        <div class="variation_box">
                          <p class="variation_headline">オプション：</p>
                          <div class="select02">
                            <select>
                              <option>なし</option>
                              <option>季節のサラダ　＋150円</option>
                              <option>みそ汁＆季節のサラダ　＋200円</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="addition_btn_area">
                      <div class="addition_btn off">
                        追加した商品を削除する　－
                      </div>
                      <div class="addition_btn on">
                        同じ商品を別条件で注文 ＋
                      </div>
                    </div>

                  </div>
                    
                </div>


                <div class="order_item_box">

                  <div class="order_item_box_container">

                    <div class="order_item_box_inner">
                      <div class="grid_box">
                        <div class="order_item_image">
                          <div>
                            <img src="images/item02.jpg" alt="商品画像">
                            <div class="item_num">0</div>
                          </div>
                        </div>
                        <div class="order_item_info">
                          <p class="item_product">日替り弁当B</p>
                          <p class="item_price">500円(税込)</p>
                          <p class="item_text">
                            メインが２つになった豪華な日替り弁当です。副菜４種、香の物１種付きの贅沢なお弁当です。
                          </p>
                        </div>
                        <div class="order_item_num">
                          <div>
                            <div class="order_item_delete">-</div><div class="order_item_addition">+</div>
                          </div>
                        </div>
                      </div>
                      <div class="order_item_variation">

                        <div class="variation_box">
                          <p class="variation_headline">ご飯の量：</p>
                          <div class="select02">
                            <select>
                              <option>普通盛り</option>
                              <option>大盛り　＋80円</option>
                            </select>
                          </div>
                        </div>
                        
                        <div class="variation_box">
                          <p class="variation_headline">ご飯の種類：</p>
                          <div class="select02">
                            <select>
                              <option>白ご飯</option>
                              <option>味ご飯に変更　＋100円</option>
                            </select>
                          </div>
                        </div>
                        
                        <div class="variation_box">
                          <p class="variation_headline">オプション：</p>
                          <div class="select02">
                            <select>
                              <option>なし</option>
                              <option>季節のサラダ　＋150円</option>
                              <option>みそ汁＆季節のサラダ　＋200円</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="addition_btn_area">
                      <div class="addition_btn off">
                        追加した商品を削除する　－
                      </div>
                      <div class="addition_btn on">
                        同じ商品を別条件で注文 ＋
                      </div>
                    </div>

                  </div>
                    
                </div>


                <div class="order_item_box">

                  <div class="order_item_box_container">

                    <div class="order_item_box_inner">
                      <div class="grid_box">
                        <div class="order_item_image">
                          <div>
                            <img src="images/item03.jpg" alt="商品画像">
                            <div class="item_num">0</div>
                          </div>
                        </div>
                        <div class="order_item_info">
                          <p class="item_product">日替り弁当C</p>
                          <p class="item_price">600円(税込)</p>
                          <p class="item_text">
                            テキスト・テキスト・テキスト・テキストテキスト・テキスト・テキスト・テキストテキスト・テキスト・テキスト・テキスト
                          </p>
                        </div>
                        <div class="order_item_num">
                          <div>
                            <div class="order_item_delete">-</div><div class="order_item_addition">+</div>
                          </div>
                        </div>
                      </div>
                      <div class="order_item_variation">

                        <div class="variation_box">
                          <p class="variation_headline">ご飯の量：</p>
                          <div class="select02">
                            <select>
                              <option>普通盛り</option>
                              <option>大盛り　＋80円</option>
                            </select>
                          </div>
                        </div>
                        
                        <div class="variation_box">
                          <p class="variation_headline">ご飯の種類：</p>
                          <div class="select02">
                            <select>
                              <option>白ご飯</option>
                              <option>味ご飯に変更　＋100円</option>
                            </select>
                          </div>
                        </div>
                        
                        <div class="variation_box">
                          <p class="variation_headline">オプション：</p>
                          <div class="select02">
                            <select>
                              <option>なし</option>
                              <option>季節のサラダ　＋150円</option>
                              <option>みそ汁＆季節のサラダ　＋200円</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div class="addition_btn_area">
                      <div class="addition_btn off">
                        追加した商品を削除する　－
                      </div>
                      <div class="addition_btn on">
                        同じ商品を別条件で注文 ＋
                      </div>
                    </div>
                  </div>
                    
                </div>


                <div class="order_item_box">

                  <div class="order_item_box_container">

                    <div class="order_item_box_inner">
                      <div class="grid_box">
                        <div class="order_item_image">
                          <div>
                            <img src="images/item04.jpg" alt="商品画像">
                            <div class="item_num">0</div>
                          </div>
                        </div>
                        <div class="order_item_info">
                          <p class="item_product">日替り弁当D</p>
                          <p class="item_price">700円(税込)</p>
                          <p class="item_text">
                            テキスト・テキスト・テキスト・テキストテキスト・テキスト・テキスト・テキストテキスト・テキスト・テキスト・テキスト
                          </p>
                        </div>
                        <div class="order_item_num">
                          <div>
                            <div class="order_item_delete">-</div><div class="order_item_addition">+</div>
                          </div>
                        </div>
                      </div>
                      <div class="order_item_variation">

                        <div class="variation_box">
                          <p class="variation_headline">ご飯の量：</p>
                          <div class="select02">
                            <select>
                              <option>普通盛り</option>
                              <option>大盛り　＋80円</option>
                            </select>
                          </div>
                        </div>
                        
                        <div class="variation_box">
                          <p class="variation_headline">ご飯の種類：</p>
                          <div class="select02">
                            <select>
                              <option>白ご飯</option>
                              <option>味ご飯に変更　＋100円</option>
                            </select>
                          </div>
                        </div>
                        
                        <div class="variation_box">
                          <p class="variation_headline">オプション：</p>
                          <div class="select02">
                            <select>
                              <option>なし</option>
                              <option>季節のサラダ　＋150円</option>
                              <option>みそ汁＆季節のサラダ　＋200円</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="addition_btn_area">
                      <div class="addition_btn off">
                        追加した商品を削除する　－
                      </div>
                      <div class="addition_btn on">
                        同じ商品を別条件で注文 ＋
                      </div>
                    </div>

                  </div>
                    
                </div>



              </div>

            </div>

          </div>


        </div>
      </section>


      <section>

        <div class="reserve_container">
          <div class="section_header">
            <h2 class="section_title">チェックした日の予約</h2>
          </div>
          <div class="reserve_box container">

              <div class="order_frame">
                <table>
                  <tr>
                    <th>引渡し先</th>
                    <td>
                      東京都立第一小学校
                    </td>
                  </tr>
                  <tr>
                    <th>引渡し日</th>
                    <td>
                      <span class="delivery_days">9月5日（月）</span> 
                    </td>
                  </tr>
                  <tr>
                    <th>対象日の合計</th>
                    <td>
                      <span class="price">1個　500円</span> 
                    </td>
                  </tr>
                </table>
              </div>

              <div class="button">
                  <div>
                    <a href="" class="button01">
                      お支払方法・内容確認へ
                    </a>
                  </div>
              </div>


              <div class="cover"></div>
              <div class="popup">
                <div class="close">×</div>
                <div class="popup_box">
                </div>
              </div>

          </div>
        </div>

      </section>




      <div class="calendar_info">
        <p>
          ご注文期限：当日９：００まで
        </p>
        <ul>
          <li>各種注釈をここにテキスト反映します。</li>
          <li>毎週〇曜日のメニューは日替りメニューとなります。詳しくはスタッフまでご確認ください。</li>
          <li>容器回収は、原則次回お届け日の回収となります。</li>
        </ul>
      </div>

    </main>
        </template>
    </layout>
</template>

<style scoped>
.cls-1sumi{fill:#fff;}.cls-2sumi{fill:#666;}
.cls-1decision{fill:#fff;}.cls-2decision{fill:#f17225;}
.cls-1circle{fill:#fff;}.cls-2circle{fill:#f17225;}
</style>

<script setup>
import layout from '../layout/App.vue'
</script>